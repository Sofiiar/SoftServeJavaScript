//TASK2================================

document.addEventListener('DOMContentLoaded', function () {
    let primeImage = document.getElementById('image');
    let modalImage = document.getElementById('modalImage');
    let changePictureBtn = document.getElementById('changePictureBtn');
    let modal = new bootstrap.Modal(document.getElementById('modal'), {
        keyboard: true
    });

    changePictureBtn.addEventListener('click', function () {
        primeImage.src = '/homework6/images/cat.jpg';
        modalImage.src = primeImage.src;
        primeImage.alt = 'Cat';
        modal.show();
    });

    document.getElementById('modal').addEventListener('hidden.bs.modal', function () {
        primeImage.src = '/homework6/images/dog.jpg';
        primeImage.alt = 'Dog';
    });
});