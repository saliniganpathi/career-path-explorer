function recommendCareers() {

    const skills = document.querySelectorAll(".skill:checked");
    const interest = document.getElementById("interest").value;
    const domain = document.getElementById("domain").value;
    const academic = document.getElementById("academic").value;

    let careers = [];

    skills.forEach(skill => {
        if (skill.value === "programming") {
            careers.push("Software Developer");
        }

        if (skill.value === "problem-solving") {
            careers.push("Data Analyst");
        }

        if (skill.value === "communication") {
            careers.push("Business Analyst");
        }

        if (skill.value === "creativity") {
            careers.push("UI/UX Designer");
        }

        if (skill.value === "leadership") {
            careers.push("Project Manager");
        }
    });

    if (interest === "healthcare" || academic === "biology") {
        careers.push("Healthcare Professional");
    }

    if (interest === "finance" || academic === "commerce") {
        careers.push("Financial Analyst");
    }

    if (interest === "technology" || domain === "software") {
        careers.push("Web Developer");
    }

    if (domain === "data" || academic === "mathematics") {
        careers.push("Data Scientist");
    }

    if (interest === "design" || domain === "design") {
        careers.push("Graphic Designer");
    }

    careers = [...new Set(careers)];

    const results = document.getElementById("results");

    if (careers.length === 0) {
        results.innerHTML = `
            <h2>Please select your skills and preferences.</h2>
        `;
        return;
    }

    results.innerHTML = `
        <h2>🎯 Recommended Careers</h2>
        ${careers.map(career => `
            <div>
                <strong>${career}</strong>
            </div>
        `).join("")}
    `;
}
