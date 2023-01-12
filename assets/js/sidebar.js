"use strict";

const deActive = () => {
  $("ul.menu > li > div").find(".bx-chevron-down").removeClass("active");
  $("ul.menu > li").find("ul.sub-menu").removeClass("active");
  $("ul.menu > li").removeClass("active");
};

export { deActive };
