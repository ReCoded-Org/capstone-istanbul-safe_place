export function getErrorClass(error) {
  if (!error) return "";

  return "inputError";
}

export default { getErrorClass };
