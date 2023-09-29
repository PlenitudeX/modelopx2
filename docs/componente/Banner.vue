<template>
    <div class="banner">
        <div class="fundo">
            <h1>Título do Banner</h1>
            <p>Breve descrição do banner que pode ou não existir</p>
        </div>
    </div>
</template>

<style>
.banner {
    background-color: #f1f1f1;
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 80vh;
}

.banner .fundo {
    background-color: rgba(183, 183, 183, 0.5);
    height: 100%;
}

.banner h1 {
    font-size: 50px;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner p {
    font-size: 24px;
    position: absolute;
    top: 17rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .banner {
        height: 50vh;
    }

    .banner h1 {
        font-size: 30px;
        top: 5rem;
    }

    .banner p {
        font-size: 16px;
        top: 10rem;
    }
}
</style>
