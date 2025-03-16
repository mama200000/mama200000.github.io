
var questions = [
    {
        question: "Вопрос 1: Какие основные современные технологии используются в образовании?",
        answers: {
            1: 'Интерактивные доски и планшеты.',
            2: 'Облачные платформы',
            3: 'Система управления обучением',
            4: 'Google',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '1'
    },
    {
        question: "Вопрос 2: Какой из следующих аспектов является недочетом использования технологий в образовании? ",
        answers: {
            1: 'Возможность преподавать большему количеству студентов',
            2: 'Риск рассеивания внимания студентов ',
			3: 'Повышение уровня взаимодействия',
			4: 'Упрощение доступа к знаниям',
			5: 'Ничего из перечисленного'
			
        },
        rightAnswer: '2'
    },
    {
        question: "Вопрос 3: Какая технология чаще всего используется для создания интерактивных уроков и презентаций?",
        answers: {
            1: 'Блокчейн',
            2: 'Интерактивные доски и специализированное ПО',
            3: '3D-принтеры',
            4: 'Квантовые вычисления',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '2'
    },
    {
        question: "Вопрос 4: Что является ключевым преимуществом использования онлайн-платформ в образовании?",
        answers: {
            1: 'Возможность персонализированного обучения и гибкость расписания',
            2: 'Ограниченность доступа к информации',
            3: 'Отсутствие необходимости в преподавателях',
            4: 'Увеличение стоимости образования',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '1'
    },
	   {
        question: "Вопрос 5: Какая технология позволяет создать эффект наиболее полного погружения в изучаемый материал?",
        answers: {
            1: 'Виртуальная и дополненная реальность (VR/AR)',
            2: 'E-mail рассылка',
            3: 'Облачные хранилища',
            4: 'Системы управления базами данных',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '1'
    },
		   {
        question: "Вопрос 6: Какой из перечисленных инструментов лучше всего подходит для организации совместной работы над проектами?",
        answers: {
            1: 'Электронные таблицы',
            2: 'Текстовые редакторы',
            3: 'Калькуляторы',
            4: 'Инструменты для видеоконференций и онлайн-доски'
        },
        rightAnswer: '4'
    },
		   {
        question: "Вопрос 7: Как современные технологии могут улучшить образовательный процесс?",
        answers: {
            1: 'Сделав его более интерактивным и доступным',
            2: 'Сделав его более дорогим',
            3: 'Уменьшив роль учителя',
            4: 'Ничего из перечисленного'
        },
        rightAnswer: '1'
    },
		   {
        question: "Вопрос 8: Какие риски связаны с использованием современных технологий в образовании?",
        answers: {
            1: 'Риски вообще отсутствуют',
            2: 'Ухудшение физического здоровья',
            3: 'Ничего из перечисленного',
            4: 'Зависимость от технологий и снижение навыков критического мышления'
        },
        rightAnswer: '4'
    },
		   {
        question: "Вопрос 9: Какой из следующих факторов наиболее существенно влияет на внедрение технологий в образовательный процесс? ",
        answers: {
            1: 'Учебный план',
            2: 'Подготовленность преподавателей',
            3: 'Финансирование',
            4: 'Политическая ситуация',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '2'
    },
    {
        question: "Вопрос 10: Какой из следующих инструментов используется для создания интерактивных учебных материалов?",
        answers: {
            1: 'Видеопроектор',
            2: 'Онлайн-редакторы',
            3: 'Печатные пособия',
            4: 'Флипчарт',
            5: 'Ничего из перечисленного'
        },
        rightAnswer: '2'
    }
];

// Генерация теста
document.addEventListener('DOMContentLoaded', function () {
    var testContainer = document.getElementById('test');
    var resultButton = document.getElementById('resultButton');
    var resultsContainer = document.getElementById('results');

    generateTest(questions, testContainer, resultsContainer, resultButton);
});

function generateTest(questions, testContainer, resultsContainer, resultButton) {
    // Функция для отображения вопросов
    function showQuestions(questions, testContainer) {
        var out = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (var ans_text in questions[i].answers) {
                answers.push(
                    '<label><br><input type="radio" name="question' + i + '" value="' + ans_text + '">' +
                    ans_text + ') ' + questions[i].answers[ans_text] + '</label>'
                );
            }
            out.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        testContainer.innerHTML = out.join('');
    }

    // Функция для проверки результатов
    function showResults(questions, testContainer, resultsContainer) {
        var answerContainers = testContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var rightAnswersNum = 0;

        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].rightAnswer) {
                answerContainers[i].style.color = 'green';
                rightAnswersNum++;
            } else {
                answerContainers[i].style.color = 'red';
            }
        }

        var resultStr;
        if (rightAnswersNum < 4) {
            resultStr = 'Неудовлетворительно';
		} else if (rightAnswersNum === 4) {
            resultStr = 'Нужно повторить';
        } else if (rightAnswersNum === 5) {
            resultStr = 'Нужно повторить';
		} else if (rightAnswersNum === 6) {
            resultStr = 'Нужно повторить';	
        } else if (rightAnswersNum === 7) {
            resultStr = 'Хорошо';
		} else if (rightAnswersNum === 8) {
            resultStr = 'Хорошо';
		} else if (rightAnswersNum === 9) {
            resultStr = 'Хорошо';	
        } else if (rightAnswersNum === 10) {
            resultStr = 'Отлично';
        }

        resultsContainer.innerHTML = resultStr;
    }

    // Инициализация теста
    showQuestions(questions, testContainer);
    resultButton.onclick = function () {
        showResults(questions, testContainer, resultsContainer);
    };
}