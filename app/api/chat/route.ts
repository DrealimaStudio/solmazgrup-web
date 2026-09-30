import OpenAI from "openai";
import { NextResponse } from "next/server";

import { getSolmazAIContext } from "@/lib/solmaz-ai-context";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "OpenAI API anahtarı tanımlanmamış.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const messages: ChatMessage[] = Array.isArray(body.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        {
          error: "Mesaj bulunamadı.",
        },
        {
          status: 400,
        }
      );
    }

    // Gereksiz token kullanımını engellemek için
    // yalnızca son 10 mesajı gönderiyoruz.
    const recentMessages = messages.slice(-10);

    const companyContext = getSolmazAIContext();

    const conversation = recentMessages
      .map(
        (message) =>
          `${message.role === "user" ? "Kullanıcı" : "Solmaz AI"}: ${
            message.content
          }`
      )
      .join("\n\n");

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",

      instructions: `
Sen Solmaz Grup'un internet sitesindeki dijital danışman
"Solmaz AI"sın.

Görevin ziyaretçilere Solmaz Grup, projeleri, hizmetleri,
iletişim bilgileri ve arsa değerlendirme süreci hakkında
yardımcı olmaktır.

ÇOK ÖNEMLİ KURALLAR:

1. Solmaz Grup hakkında yalnızca aşağıda verilen doğrulanmış
   şirket bilgilerini kullan.

2. Bilmediğin hiçbir şirket veya proje bilgisini uydurma.

3. Fiyat, satış durumu, teslim tarihi, stok, müsait daire,
   metrekare, teknik özellik veya proje özelliği kaynak
   bilgilerinde yoksa bunları tahmin etme.

4. Kullanıcı kaynaklarda bulunmayan bir bilgi sorarsa açıkça
   güncel/doğrulanmış bilgin olmadığını söyle.

5. Böyle bir durumda kullanıcıyı Solmaz Grup ile iletişime
   geçmeye yönlendir.

6. Kullanıcı bir proje hakkında soru soruyorsa proje adını
   cevabında koru.

7. Kullanıcı arsa sahibi olduğunu söylerse arsanın konumu,
   yaklaşık büyüklüğü ve varsa ada/parsel bilgisinin
   değerlendirme için yararlı olabileceğini belirt.

8. Kullanıcıdan gereksiz kişisel bilgi isteme.

9. Cevapların kısa, profesyonel, sıcak ve anlaşılır olsun.

10. Varsayılan dil Türkçe olsun. Kullanıcı İngilizce
    konuşursa İngilizce cevap verebilirsin.

11. Kendini OpenAI veya ChatGPT olarak tanıtma.
    Adın "Solmaz AI".

12. Hukuki, finansal veya yatırım garantileri verme.

DOĞRULANMIŞ SOLMAZ GRUP VERİLERİ:

${companyContext}
`,

      input: conversation,

      max_output_tokens: 500,
    });

    const answer =
      response.output_text ||
      "Şu anda yanıt oluşturamadım. Lütfen tekrar deneyin.";

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Solmaz AI error:", error);

    return NextResponse.json(
      {
        error:
          "Solmaz AI şu anda yanıt veremiyor. Lütfen daha sonra tekrar deneyin.",
      },
      {
        status: 500,
      }
    );
  }
}