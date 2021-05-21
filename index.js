function wordConverter(wd) {
  let you = "you";
  let me = "me";
  if (wd === "i" || wd === "me") {
    return addWhiteSpace(you);
  } else if (wd === "you") {
    return addWhiteSpace(me);
  } else {
    return addWhiteSpace(wd);
  }
}

function toString(wd) {
  return (wd = wd.toString());
}

function addWhiteSpace(wd) {
  return (wd = `${wd} `);
}

function startWord(s) {
  let i = "i";
  if (s.startsWith("me")) {
    return addWhiteSpace(i);
  } else {
    return s;
  }
}

function isEmpty(s) {
  if (s.length === 0) {
    return true;
  } else {
    return false;
  }
}

function splitString(s) {
  if (typeof s === "string") {
    return (s = s.split(" "));
  } else {
    return s;
  }
}

function last(s) {
  return s.slice(s.length - 1);
}

function butLast(s) {
  return s.slice(0, -1);
}

function mySwitch(s) {
  if (isEmpty(s)) {
    return "";
  } else {
    s = startWord(
      mySwitch(butLast(splitString(s))).concat(
        wordConverter(toString(last(splitString(s))))
      )
    );
    return s;
  }
}
debugger;
console.log(mySwitch("you told me that i should wake you up"));
