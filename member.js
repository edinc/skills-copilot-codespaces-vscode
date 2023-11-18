function skillsMember()
{
    var skills = ["HTML", "CSS", "JS", "PHP"];
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

    return member;
}