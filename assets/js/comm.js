document.addEventListener('DOMContentLoaded', () => {
    // 현재 스크롤 위치 가져오기
    var scrollY = window.scrollY

    // b3.png 이미지 초기 위치 설정
    var bImage = document.querySelector('.c-hero__letter-b')
    var initialPositionX_B = -100 // 초기 위치를 -100%로 설정

    // k3.png 이미지 초기 위치 설정
    var kImage = document.querySelector('.c-hero__letter-k')
    var initialPositionX_K = 0

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function () {
        scrollY = window.scrollY

        if (bImage) {
            // b3.png 이미지 왼쪽으로 이동
            var moveX_B = initialPositionX_B - scrollY / 5
            bImage.style.transform = 'translateX(' + moveX_B + '%) translateY(-50%)'
        }

        if (kImage) {
            // k3.png 이미지 오른쪽으로 이동
            var moveX_K = initialPositionX_K + scrollY / 5
            kImage.style.transform = 'translateX(' + moveX_K + '%) translateY(-50%)'
        }
    })

    // Section 3 : left description / tokenpost-num
    gsap.to('.sec-left-icon', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        repeatDelay: 3,
        ease: 'none',
    })

    // Section : left description / sec-left-arrows
    gsap.to('.sec-left-arrows-txt', {
        duration: 0.3,
        y: 10,
        ease: 'circ.in',
        repeat: -1,
        yoyo: true,
    })

    // Sticker.init('.sticker')

    AOS.init({
        offset: 120,
        delay: 0,
        duration: 600,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    })

    const careerContainer = document.getElementById('career')
    const nextSection = document.getElementById('next-section')

    if (careerContainer) {
        careerContainer.addEventListener('scroll', () => {
            if (careerContainer.scrollTop + careerContainer.clientHeight >= careerContainer.scrollHeight) {
                // 스크롤이 끝에 도달했을 때 다음 섹션으로 이동
                nextSection.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }
})
