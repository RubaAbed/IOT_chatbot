const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang= "ar";

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (
        text.includes("السلام عليكم")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "وعليكم السلام";
      texts.appendChild(p);
    }
    if (
      text.includes("كيف حالك")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "بخير الحمدلله";
      texts.appendChild(p);
    }
	if (
      text.includes("عندي سؤال")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "تفضل ماهو سؤالك؟";
      texts.appendChild(p);
    }
    if (
      text.includes("تحدث عن شركة الأساليب الذكية")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "مؤسسة تجارية وطنية تأسست عام 2010 متخصصة في المعدات الألية والروبوتات والذكاء الاصطناعي وهي منصفة لدى مجلة فوربس العالمية كأحد اكثر الشركات ابداعا في المملكة العربية السعودية في اخر تصنيف عام 2015 ومنصنفة لدى الهيئة السعودية للمنشأت (منشأت)كواحدة من اكثر الشركات ابتكارا في عام 2021";
      texts.appendChild(p);
    }
}
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
