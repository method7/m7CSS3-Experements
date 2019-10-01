export function myStories() {
  return [
    { id: 0, url: "/", title: "Home", open: false },
    { id: 1, url: "/one", title: "Story one", open: false },
    { id: 2, url: "/two", title: "Story two", open: false },
    { id: 3, url: "/three", title: "Story three", open: false }
  ];
}

export function concatString(obj) {
  let string = "";
  obj.map(function(cssClass) {
    string += cssClass + " ";
  });
  return string.trim();
}
