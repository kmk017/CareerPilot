const scoreTable = {
    HIGH: {
        HIGH: 10,
        MEDIUM: 8,
        LOW: 6,
    },

    MEDIUM: {
        HIGH: 8,
        MEDIUM: 6,
        LOW: 4,
    },

    LOW: {
        HIGH: 6,
        MEDIUM: 4,
        LOW: 2,
    },
};

function calculateCategoryScore(userCategory, careerCategory) {

    let categoryScore = 0;

    Object.keys(userCategory).forEach((item) => {

        if (careerCategory[item]) {

            const importance = careerCategory[item];

            const userLevel = userCategory[item];

            categoryScore += scoreTable[userLevel][importance];

        }

    });

    return categoryScore;

}

function recommendCareer(userAnswers, careers) {

    const results = [];

    careers.forEach((career) => {

        let score = 0;

        // Skills Score
        score += calculateCategoryScore(
            userAnswers.requiredSkills,
            career.requiredSkills
        );

        // Interests Score
        score += calculateCategoryScore(
            userAnswers.interests,
            career.interests
        );

        results.push({
            career,
            score: score,
        });

    });

    results.sort((a, b) => {
        return b.score - a.score;
    });

    return results;

}

export default recommendCareer;