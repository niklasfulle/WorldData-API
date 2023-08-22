const fallback = (text: string) => {
  console.log(navigator.userAgent)
  const isIos = navigator.userAgent.match(/ipad|iphone/i);
  const textarea = document.createElement('textarea');

  // create textarea
  textarea.value = text;

  // ios will zoom in on the input if the font-size is < 16px
  textarea.style.fontSize = '20px';
  document.body.appendChild(textarea);

  // select text
  if (isIos) {
    const range = document.createRange();
    range.selectNodeContents(textarea);

    const selection = window.getSelection();
    if (selection === null) return;
    selection.removeAllRanges();
    selection.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {
    textarea.select();
  }

  // copy selection
  document.execCommand('copy');

  // cleanup
  document.body.removeChild(textarea);
};

const copyToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    fallback(text);
    return;
  }

  navigator.clipboard.writeText(text);
};

export default copyToClipboard;