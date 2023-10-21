$(".our_team_block .grid .grid__item .btn").on("click", function (e) {
  e.preventDefault();
  $(".meet_team_modal").addClass("active");
  $("body").addClass("disable_scroll");
  $(".meet_team_modal .image-wrapper").html("");
  $(this)
    .closest(".grid__item")
    .find(".image-wrap img")
    .clone()
    .appendTo(".meet_team_modal .image-wrapper");
  let name = $(this).closest(".grid__item").find("h3").html();
  let specialization = $(this).closest(".grid__item").find(".text-spacing p").html();
  let description = $(this).closest(".grid__item").find(".optional-description").html();
  $(".meet_team_modal .member_name").html(name);
  $(".meet_team_modal .member_description").html(description);
  $(".meet_team_modal .member_specializations").html(specialization);
});
$("body").append(`
    <div class="meet_team_modal popup_modal">
      <div class="modal_overlay"></div>
      <div class="modal_inner_wrapper">
          <button type="button" class="close_popup">
                  <span>×</span>
          </button>
          <div class="image-wrapper">
              <img src="" alt="It's Vincent!">
          </div>
          <div class="member_content">
              <h3 class="member_name"></h3>
              <p class="member_specializations"></p>
              <p class="member_description"></p>
          </div>
      </div>
    </div>`);
$(".close_popup , .modal_overlay").on("click", function () {
  $(".popup_modal").removeClass("active");
  $("body").removeClass("disable_scroll");
});