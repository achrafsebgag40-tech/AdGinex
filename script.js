<script>
        function generateContent() {
            const product = document.getElementById('productName').value;
            const type = document.getElementById('contentType').value;
            const tone = document.getElementById('toneStyle').value;
            const outputBox = document.getElementById('output');

            if (!product) {
                alert('الرجاء إدخال اسم المنتج أو فكرته أولاً!');
                return;
            }

            outputBox.innerHTML = "جاري معالجة البيانات وتحليل السوق بواسطة خوارزميات AdGenix AI... ⏳";

            // محاكاة محرك الذكاء الاصطناعي المتقدم
            setTimeout(() => {
                let result = "";
                if (type === 'description') {
                    result = `✨ **الوصف التسويقي الاحترافي:**\n\nهل تعبت من البحث عن الجودة الحقيقية؟ إليك "${product}" المصمم خصيصاً ليغير تجربتك بالكامل.\n\n🔥 **المميزات الرئيسية:**\n- دقة فائقة وتصميم عصري يواكب تطلعاتك.\n- أداء استثنائي يضمن لك راحة وثقة مطلقة.\n- جودة مصنعية عالية تدوم طويلاً.\n\n🛒 **اطلبه الآن ولا تفوت الفرصة واستمتع بعروض لفترة محدودة!**`;
                } else if (type === 'social') {
                    result = `📱 **حزمة منشورات السوشيال ميديا (جاهزة للنشر):**\n\n1️⃣ "ودع الطرق التقليدية واكتشف القوة الحقيقية مع ${product}! جاهز لتكون الأفضل؟ 🚀"\n2️⃣ "التصميم الذي تمناه الجميع أصبح بين يديك الآن. شاركنا رأيك في التعليقات! 👇\n\n#تسوق_مباشر #${product.replace(/\s+/g, '_')} #عروض_2026 #ابتكار"`;
                } else {
                    result = `🎯 **أفكار الحملات الإعلانية الممولة:**\n\n- **الإعلان الأول (فيديو ترويجي):** "هل تبحث عن الحل الأمثل؟ ${product} يأتيك ليختصر عليك الوقت والجهد. اضغط على الرابط واكتشف العرض!"\n- **الإعلان الثاني (صورة تفاعلية):** "لا تساوم على الجودة. امتلك ${product} اليوم وتميز عن الجميع."`;
                }

                outputBox.innerHTML = result;
            }, 1000);
        }

        function copyText() {
            const outputText = document.getElementById('output').innerText;
            navigator.clipboard.writeText(outputText);
            alert('تم نسخ المحتوى بنجاح إلى الحافظة! 📋');
        }

        function openCheckout() {
            alert('🚀 بوابة الدفع الآمنة (Stripe Checkout Integration):\n\nهنا يتم توجيه العميل لصفحة دفع مشفرة بـ 29$ شهرياً، وبمجرد إتمام الدفع، يقوم نظام الـ Webhook بتفعيل حسابه أوتوماتيكياً وتحويل الأرباح لحسابك.');
        }
    </script>
