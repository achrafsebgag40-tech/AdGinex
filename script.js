/**
 * AdGenix AI Core Engine - 2026
 * محرك توليد المحتوى والتسويق الرقمي
 */

function generateContent() {
    const productInput = document.getElementById('productName');
    const typeInput = document.getElementById('contentType');
    const toneInput = document.getElementById('toneStyle');
    const outputBox = document.getElementById('output');

    // التحقق من وجود العناصر في الصفحة لمنع حدوث أي خطأ برمج
    if (!productInput || !typeInput || !outputBox) {
        console.error('خطأ: بعض عناصر الواجهة غير موجودة في ملف HTML.');
        return;
    }

    const product = productInput.value.trim();
    const type = typeInput.value;
    const tone = toneInput ? toneInput.value : 'professional';

    // التحقق من إدخال اسم المنتج
    if (!product) {
        alert('الرجاء إدخال اسم المنتج أو فكرته أولاً!');
        productInput.focus();
        return;
    }

    // عرض رسالة التحميل بشكل أنيق
    outputBox.innerHTML = "جاري معالجة البيانات وتحليل السوق بواسطة خوارزميات AdGenix AI... ⏳";

    // محاكاة استجابة الخوارزمية المتقدمة
    setTimeout(() => {
        let result = "";
        
        if (type === 'description') {
            result = `✨ **الوصف التسويقي الاحترافي:**\n\nهل تعبت من البحث عن الجودة الحقيقية؟ إليك "${product}" المصمم خصيصاً ليغير تجربتك بالكامل.\n\n🔥 **المميزات الرئيسية:**\n- دقة فائقة وتصميم عصري يواكب تطلعاتك.\n- أداء استثنائي يضمن لك راحة وثقة مطلقة.\n- جودة مصنعية عالية تدوم طويلاً.\n\n🛒 **اطلبه الآن ولا تفوت الفرصة واستمتع بعروض لفترة محدودة!**`;
        } else if (type === 'social') {
            const cleanProduct = product.replace(/\s+/g, '_');
            result = `📱 **حزمة منشورات السوشيال ميديا (جاهزة للنشر):**\n\n1️⃣ "ودع الطرق التقليدية واكتشف القوة الحقيقية مع ${product}! جاهز لتكون الأفضل؟ 🚀"\n\n2️⃣ "التصميم الذي تمناه الجميع أصبح بين يديك الآن. شاركنا رأيك في التعليقات! 👇\n\n#تسوق_مباشر #${cleanProduct} #عروض_2026 #ابتكار"`;
        } else {
            result = `🎯 **أفكار الحملات الإعلانية الممولة:**\n\n- **الإعلان الأول (فيديو ترويجي):** "هل تبحث عن الحل الأمثل؟ ${product} يأتيك ليختصر عليك الوقت والجهد. اضغط على الرابط واكتشف العرض!"\n\n- **الإعلان الثاني (صورة تفاعلية):** "لا تساوم على الجودة. امتلك ${product} اليوم وتميز عن الجميع."`;
        }

        outputBox.innerHTML = result;
    }, 800);
}

function copyText() {
    const outputBox = document.getElementById('output');
    if (!outputBox || !outputBox.innerText) {
        alert('لا يوجد محتوى لنسخه!');
        return;
    }

    const outputText = outputBox.innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('تم نسخ المحتوى بنجاح إلى الحافظة! 📋');
    }).catch(err => {
        console.error('فشل النسخ:', err);
    });
}

function openCheckout() {
    alert('🚀 بوابة الدفع الآمنة (Stripe Checkout Integration):\n\nهنا يتم توجيه العميل لصفحة دفع مشفرة بـ 29$ شهرياً، وبمجرد إتمام الدفع، يقوم نظام الـ Webhook بتفعيل حسابه أوتوماتيكياً وتحويل الأرباح لحسابك.');
}