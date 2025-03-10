document.addEventListener("DOMContentLoaded", function () {
    const certificationItems = document.querySelectorAll(".certification-item");
    const modal = document.getElementById("certificationModal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeModal = document.getElementById("closeModal");

    // Tambahkan event listener ke setiap item sertifikat
    certificationItems.forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const title = this.getAttribute("data-title") || "Sertifikat";
            const desc = this.getAttribute("data-desc") || "Deskripsi tidak tersedia";

            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modal.style.display = "flex";
        });
    });

    // Event listener untuk menutup modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Menutup modal jika klik di luar modal-content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
