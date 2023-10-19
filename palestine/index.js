const sections = document.querySelectorAll("section");
const boxes = document.querySelectorAll(".boxx")
const loadsection = function (entries,observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const loadbox=function (entries,observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("movee");
      observer.unobserve(entry.target);
    });
  };
const sectionactive = new IntersectionObserver(loadsection, {
  root: null,
  threshold: 0.25,
});
const boxactive= new IntersectionObserver(loadbox,{root:null,threshold:.3})
sections.forEach(section=>section.classList.add('section--hidden'))
sections.forEach((section) => sectionactive.observe(section));
boxes.forEach((box) => boxactive.observe(box));
boxes.forEach(section=>section.classList.add('move'))

