// 비밀번호 칸 오른쪽 눈 아이콘: 누를 때마다 비밀번호 보이기/숨기기 전환
document.querySelectorAll(".btn-visibility").forEach((button) => {
  const input = button.previousElementSibling;
  const icon = button.querySelector("img");

  button.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.src = isHidden ? "../images/ic_visibility_on.svg" : "../images/ic_visibility_off.svg";
    button.setAttribute("aria-label", isHidden ? "비밀번호 숨기기" : "비밀번호 보기");
  });
});
