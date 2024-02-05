// FILEPATH: /Users/edin/demo/skills-copilot-codespaces-vscode/member.test.js
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('')).window;
global.document = document;

var skills = ["JavaScript", "React"]; // Define skills array for testing

var member = {
    name: "Kham",
    age: 22,
    skills: skills,
    showInfor: function()
    {
        document.write("Name: " + this.name + "<br/>");
        document.write("Age: " + this.age + "<br/>");
        document.write("Skills: " + this.skills + "<br/>");
    }
};

describe('member object', () => {
    test('has name property', () => {
        expect(member).toHaveProperty('name', 'Kham');
    });

    test('has age property', () => {
        expect(member).toHaveProperty('age', 22);
    });

    test('has skills property', () => {
        expect(member).toHaveProperty('skills', skills);
    });

    test('has showInfor function', () => {
        expect(typeof member.showInfor).toBe('function');
    });
});