const openLessonButton = document.querySelectorAll('[data-lesson-target]');
const closeLessonButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openLessonButton.forEach(button => {
    button.addEventListener('click', () => {
    const lesson = document.querySelector(button.dataset.lessonTarget)
    openLesson(lesson)
    }
    )
}
)  
closeLessonButton.forEach(button => {
    button.addEventListener('click', () => {
        const lesson = button.closest('.lesson')
        closeLesson(lesson)
    }
    )
}
)
overlay.addEventListener('click', () => {
    const lessons = document.querySelectorAll('.lesson.active')
    lessons.forEach(lesson => {
        closeLesson(lesson)
    }
    )
}
)
  
function openLesson(lesson) {
    if (lesson == null) return
    lesson.classList.add('active')
    overlay.classList.add('active')
}
function closeLesson(lesson) {
    if (lesson == null) return
    lesson.classList.remove('active')
    overlay.classList.remove('active')
}
