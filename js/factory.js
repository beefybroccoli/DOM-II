export function create_tag({ type, textContent, id, classArray }) {
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  classArray && temp_tag.classList.add(...classArray);
  temp_tag.id = id;
  return temp_tag;
}
