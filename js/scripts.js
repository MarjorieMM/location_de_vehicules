$("header")
	.find(".toggle-button")
	.on("click", () => {
		$(".toggle-button").toggleClass("bg-grey");
		$(".title").toggleClass("d-none");
	});

const backgrounds = [
	"url(../images/background1.jpg) center / contain no-repeat",
	"url(../images/background2.jpg) center / contain no-repeat",
	"url(../images/background3.jpg) center / contain no-repeat",
];

let index = 0;

const change = () => {
	if (index >= backgrounds.length) {
		index = 0;
	}
	$("#background").css("background", backgrounds[index++]);
	console.log($("#background").css("background"));
};

setInterval(change, 3000);

///////////////////////
const $grid = $(".grid").isotope({
	getSortData: {
		prix: ".prix parseInt",
	},
});

$(".sort").on("click", () => {
	console.log("yes");
	$grid.isotope({
		sortBy: "prix",
		sortAscending: true,
	});
});
