const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let myModal = (document.querySelector("#modal").className = "hidden");
let likeButtons = document.querySelectorAll(".like-glyph");
likeButtons.forEach(function (likeButton) {
	likeButton.addEventListener("click", function (e) {
		mimicServerCall()
			.then(function () {
				if (likeButton.innerText === EMPTY_HEART) {
					likeButton.innerText = FULL_HEART;
					likeButton.className = "activated-heart";
				} else {
					likeButton.innerText = EMPTY_HEART;
					likeButton.className = "";
				}
			})
			.catch(function (error) {
				myModal.className = "";
				setTimeout(function () {
					myModal.className = "hidden";
				}, 5000);
			});
	});
});