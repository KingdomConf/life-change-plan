const sections = {
    location: `
        <p><strong>Life Change Church</strong> is located in the River's Edge area of Milford, surrounded by shopping and dining options like Target, Walmart, and local restaurants. We're easily accessible right off I-275 and just 25 minutes from downtown Cincinnati.</p>
        <p>Our address is <em>701 Chamber Drive, Milford, OH 45150</em>.</p>
    `,
    beliefs: `
        <h3>IS LIFE CHANGE CHURCH PART OF A DENOMINATION?</h3>
        <p>No, Life Change Church is a non-denominational Christian church. If you'd like to learn more about what we believe, you can visit our <em>Statements of Faith</em> page for more details.</p>
    `,
    connect: `
        <p>One of the best ways to get connected at LCC is by joining our Growth Track. It's a simple three-step process where you'll learn more about Life Change Church, discover your unique design, and find a Dream Team where you can serve and make a difference.</p>
        <p>If you have questions, stop by the Welcome Desk in the lobby before service and you'll also have a chance to meet some of our staff and volunteers who can answer any questions.</p>
        <p>For more ways to get connected, visit our <em>Growth Track Page</em>.</p>
    `,
    parking: `
        <h3>Where Should I Park?</h3>
        <p>We have reserved parking spaces right up front just for our first-time guests and those who sign up through <em>Plan Your Visit</em>. We want to make your first experience with us as smooth as possible!</p>
    `,
    clothing: `
        <h3>What Should I Wear?</h3>
        <p>Come just as you are! Whether you're casual or like to dress up a bit, you'll fit right in. We want you to feel comfortable and at home.</p>
    `,
    nursing: `
        <h3>Is there a room for Nursing Mothers?</h3>
        <p>Yes! We offer a dedicated, private and secure nursing room located inside our Growth Track room. It's thoughtfully set up with a crib, a rocking chair, and other helpful items to create a comfortable, quiet space for you and your baby during service.</p>
    `,
    lckids: `
        <h3>Are there classes for my children?</h3>
        <p>YES! LCKids is an amazing experience available for kids 6 weeks to 5th grade. Your kids will be safe, have fun, grow, and discover just how much God loves them. We will send you more details the week of your visit. If you haven't already, make sure your <em>Plan Your Visit</em> so we have you already in the system and ready to go!</p>
    `,
    teens: `
        <h3>IS THERE A PLACE FOR STUDENTS (MIDDLE SCHOOL & HIGH SCHOOL)?</h3>
        <p>Yes! Our Life Change Students (LCS) service is designed just for students in grades 6th–12th. They meet every Sunday evening at 6:00 PM for worship, teaching, and connection. Arrive at 5:30 for hangout right before service. Learn more about LCS <em>here</em>.</p>
    `,
    coffee: `
        <h3>IS THERE COFFEE OR REFRESHMENTS AVAILABLE?</h3>
        <p>Absolutely! Stop by our Hebrews Café before service to grab coffee and other refreshments — we'd love for you to hang out and meet some new people!</p>
    `
};

const navItems = document.querySelectorAll('.nav-item');
const content = document.getElementById('content');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get the section to display
        const section = this.getAttribute('data-section');
        
        // Update content with fade animation
        content.classList.remove('fade-in');
        setTimeout(() => {
            content.innerHTML = sections[section];
            content.classList.add('fade-in');
        }, 50);
    });
});

// Add smooth scrolling for mobile nav
navItems.forEach(item => {
    item.addEventListener('click', function() {
        this.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});
