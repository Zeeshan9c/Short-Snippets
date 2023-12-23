$(document).ready(function () {
    const itemsPerPage = 5;
    let currentPage = 1;
    let originalTableRows;

    // Function to display the data for the current page
    function displayData(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const tableBody = $(".account-table tbody");

      // Clear the previous data
      tableBody.empty();

      // Get the relevant rows from the cached original table rows
      const relevantRows = originalTableRows.slice(startIndex, endIndex);

      // Append the relevant rows to the new table
      tableBody.append(relevantRows);
    }

    // Function to create pagination links
    function createPaginationLinks(totalPages) {
      const paginationContainer = $("#pagination-buttons");
      const prevBtn = $("#prevBtn");
      const nextBtn = $("#nextBtn");
      const pageNumber = $("#pageNumber");

      // Clear previous pagination links
      paginationContainer.empty();

      // Add the Previous button
      prevBtn.on("click", function () {
        if (currentPage > 1) {
          currentPage--;
          displayData(currentPage);
          pageNumber.text(currentPage);
          updatePaginationButtons(totalPages);
          updateCurrentPageLink();
        }
      });
      paginationContainer.append(prevBtn);

      // Loop to create pagination links
      for (let page = 1; page <= totalPages; page++) {
        let link = $("<span>").attr("class", "page").text(page);
        link.on("click", function () {
          currentPage = page;
          displayData(page);
          pageNumber.text(page);
          updatePaginationButtons(totalPages);
          updateCurrentPageLink();
        });

        paginationContainer.append(link);
      }

      // Add the Next button
      nextBtn.on("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          displayData(currentPage);
          pageNumber.text(currentPage);
          updatePaginationButtons(totalPages);
          updateCurrentPageLink();
        }
      });
      paginationContainer.append(nextBtn);

      // Create the page number span and add it to the pagination container
      pageNumber.text(currentPage);
      paginationContainer.append(pageNumber);

      // Initial pagination buttons setup
      updatePaginationButtons(totalPages);
      updateCurrentPageLink();
    }

    // Function to update pagination buttons state
    function updatePaginationButtons(totalPages) {
      const prevBtn = $("#prevBtn");
      const nextBtn = $("#nextBtn");

      if (currentPage === 1) {
        prevBtn.prop("disabled", true);
      } else {
        prevBtn.prop("disabled", false);
      }

      if (currentPage === totalPages) {
        nextBtn.prop("disabled", true);
      } else {
        nextBtn.prop("disabled", false);
      }
    }

    // Function to update the "current" class for the active page link
    function updateCurrentPageLink() {
      $(".page").removeClass("current");
      $("#pagination-buttons .page").eq(currentPage).addClass("current");
    }

    // Cache the original table rows
    originalTableRows = $(".account-table tbody tr").clone();

    // Calculate the total number of pages based on the existing rows in the table
    const totalRows = originalTableRows.length;
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    // Initially display the first page
    displayData(1);

    // Create pagination links
    createPaginationLinks(totalPages);
  });



  function clear_voice_pagination() {

    // target container
    let container = '.facetwp-pager';

    // exist if facetwp not on the page
    if (!$(container).length) {
      return;
    }

    // range limit for mobile
    let mb_limit = 0;

    // end point range limit for mobile
    let mb_endpoints_limit = 1;

    // range limit for desktop
    let dk_limit = 2;

    // end point range limit for desktop
    let dk_endpoints_limit = 3;

    let mb_hide_class = 'hcuc-hide-page-mb';
    let dk_hide_class = 'hcuc-hide-page-dk';

    // dots markup
    let dots_start = '<a class="facetwp-page dots start ' + mb_hide_class + ' ' + dk_hide_class + '">…</a>';
    let dots_end = '<a class="facetwp-page dots end ' + mb_hide_class + ' ' + dk_hide_class + '">…</a>';

    // ----------------------------------------------------

    let total_pages = parseInt($(container + ' a.facetwp-page.last').attr('data-page'));
    let active_page = parseInt($(container + ' a.facetwp-page.active').attr('data-page'));

    // check if the current page is an endpoint
    let is_endpoint_page = (active_page === 1 || active_page === total_pages) ? true : false;

    let mb_range_start = is_endpoint_page ? active_page - mb_endpoints_limit : active_page - mb_limit;
    let mb_range_end = is_endpoint_page ? active_page + mb_endpoints_limit : active_page + mb_limit;

    let dk_range_start = is_endpoint_page ? active_page - dk_endpoints_limit : active_page - dk_limit;
    let dk_range_end = is_endpoint_page ? active_page + dk_endpoints_limit : active_page + dk_limit;

    let dots_mb_start, dots_mb_end, dots_dk_start, dots_dk_end = false;

    // ----------------------------------------------------

    $(container + ' .dots').remove();

    $(container + ' a.facetwp-page:not(.prev, .next)').removeClass(mb_hide_class + ' ' + dk_hide_class);

    // loop over all the page numbers, excluding 'previous' and 'next' elements
    $(container + ' a.facetwp-page:not(.active, .prev, .next, [data-page="1"], [data-page="' + total_pages + '"])').each(function (i, obj) {

      let current_page = $(this).attr('data-page');

      if (current_page < mb_range_start) {
        $(this).addClass(mb_hide_class);
        dots_mb_start = true;
      }

      if (current_page > mb_range_end) {
        $(this).addClass(mb_hide_class);
        dots_mb_end = true;
      }

      if (current_page < dk_range_start) {
        $(this).addClass(dk_hide_class);
        dots_dk_start = true;
      }

      if (current_page > dk_range_end) {
        $(this).addClass(dk_hide_class);
        dots_dk_end = true;
      }

    });

    // add dots element - start
    if (dots_mb_start || dots_dk_start) {

      $(container + ' a.facetwp-page[data-page="1"]').after(dots_start);

      if (dots_mb_start) {
        $(container + ' .dots.start').removeClass(mb_hide_class);
      }

      if (dots_dk_start) {
        $(container + ' .dots.start').removeClass(dk_hide_class);
      }

    }

    // add dots element - end
    if (dots_mb_end || dots_dk_end) {

      $(container + ' a.facetwp-page[data-page="' + total_pages + '"]').before(dots_end);

      if (dots_mb_end) {
        $(container + ' .dots.end').removeClass(mb_hide_class);
      }

      if (dots_dk_end) {
        $(container + ' .dots.end').removeClass(dk_hide_class);
      }

    }

    active_page = active_page ? active_page : 1;
    total_pages = total_pages ? total_pages : 1;

    $('.hcuc-total-page-counter span.hcuc-current-page').html(active_page);
    $('.hcuc-total-page-counter span.hcuc-total-page').html(total_pages);

  }