var link = document.querySelector(".button-open-form");
var popup = document.querySelector(".main-booking-form");
var dateArrival = popup.querySelector("[name=date-arrival]");
var dateDeparture = popup.querySelector("[name=date-departure]");
var bookingAdults = popup.querySelector("[name=booking-adults]");
var bookingKids = popup.querySelector("[name=booking-kids]");
var imageMap = document.querySelector(".image-map");
var iframeMap = document.querySelector(".iframe-map");
var isStorageSupport = true;
var storageAdults = "";
var storageKids = "";


try {
    storage = localStorage.getItem("bookingAdults");
    storage = localStorage.getItem("bookingKids");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("booking-form-show");
    if (storageAdults) {
        bookingAdults.value = storageAdults;
    }
    if (storageKids) {
        bookingKids.value = storageKids;
    }

    dateArrival.focus();
    dateArrival.classList.remove("input-error");
    dateDeparture.classList.remove("input-error");
    bookingAdults.classList.remove("input-error");
    bookingKids.classList.remove("input-error");
});

link.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
        evt.preventDefault();
        popup.classList.toggle("booking-form-show");
        if (storageAdults) {
            bookingAdults.value = storageAdults;
        }
        if (storageKids) {
            bookingKids.value = storageKids;
        }

        dateArrival.focus();
        dateArrival.classList.remove("input-error");
        dateDeparture.classList.remove("input-error");
        bookingAdults.classList.remove("input-error");
        bookingKids.classList.remove("input-error");
    }
});

popup.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value || !bookingAdults.value || !bookingKids.value) {
        evt.preventDefault();
        if (!dateArrival.value) {
            dateArrival.classList.add("input-error");
        }
        if (!dateDeparture.value) {
            dateDeparture.classList.add("input-error");
        }
        if (!bookingAdults.value) {
            bookingAdults.classList.add("input-error");
        }
        if (!bookingKids.value) {
            bookingKids.classList.add("input-error");
        }
    } else {
        if (isStorageSupport) {
            localStorage.setItem("bookingAdults", bookingAdults.value);
            localStorage.setItem("bookingKids", bookingKids.value);
        }
        dateArrival.classList.remove("input-error");
        dateDeparture.classList.remove("input-error");
        bookingAdults.classList.remove("input-error");
        bookingKids.classList.remove("input-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("booking-form-show")) {
            popup.classList.remove("booking-form-show");
        }
    }
});

imageMap.classList.add("image-map-hide");
iframeMap.classList.remove("iframe-map-hide");
