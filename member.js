function skillsMember() {
  const skills = document.querySelector('.skills');
  if (skills) {
    const member = document.querySelector('.member');
    const memberBottom = member.getBoundingClientRect().bottom;
    const skillsTop = skills.getBoundingClientRect().top;
    const skillsHeight = skills.getBoundingClientRect().height;
    const skillsBottom = skills.getBoundingClientRect().bottom;
    const skillsWidth = skills.getBoundingClientRect().width;
    const skillsLeft = skills.getBoundingClientRect().left;
    const skillsRight = skills.getBoundingClientRect().right;
    const skillsCenterY = skillsTop + skillsHeight / 2;
    const skillsCenterX = skillsLeft + skillsWidth / 2;
    const skillsCenter = [skillsCenterX, skillsCenterY];
    const memberCenter = [window.innerWidth / 2, memberBottom];
    const distance = Math.sqrt(
      Math.pow(memberCenter[0] - skillsCenter[0], 2) +
        Math.pow(memberCenter[1] - skillsCenter[1], 2)
    );
    const distanceMax = Math.sqrt(
      Math.pow(window.innerWidth / 2, 2) + Math.pow(memberBottom, 2)
    );
    const distancePercent = distance / distanceMax;
    const opacity = 1 - distancePercent;
    const scale = 1 - distancePercent / 1.5;
    const rotate = (distancePercent * 360) / 2;
    const translateX = (distancePercent * 100) / 2;
    const translateY = (distancePercent * 100) / 2;
    const translateZ = (distancePercent * 100) / 2;
    const transform = `rotate(${rotate}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`;
    skills.style.opacity = opacity;
    skills.style.transform = transform;
    if (skillsBottom < memberBottom) {
      skills.style.opacity = 0;
    }
  }
}