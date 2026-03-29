// =========================
// SAFE SCRIPT FOR ALL PAGES
// =========================

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SCROLL ANIMATION
  // =========================
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {
    window.addEventListener("scroll", () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("active");
        }
      });
    });
  }


  // =========================
  // DARK MODE (SAFE)
  // =========================
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }


  document.addEventListener("DOMContentLoaded", function () {

  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {

    const postId = post.getAttribute("data-id");

    const likeBtn = post.querySelector('.like-btn');
    const shareBtn = post.querySelector('.share-btn');
    const commentBtn = post.querySelector('.comment-btn');
    const commentSection = post.querySelector('.comment-section');
    const submitBtn = post.querySelector('.submit-comment');
    const input = post.querySelector('.comment-input');
    const commentsList = post.querySelector('.comments-list');

    const likeDisplay = post.querySelector('.likes span');
    const commentCountDisplay = post.querySelector('.comments-count span');
    const shareDisplay = post.querySelector('.shares span');

    // =========================
    // LOAD FROM LOCAL STORAGE
    // =========================
    let likeCount = localStorage.getItem(`likes-${postId}`) || 0;
    let shareCount = localStorage.getItem(`shares-${postId}`) || 0;
    let comments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];

    likeDisplay.textContent = likeCount;
    shareDisplay.textContent = shareCount;
    commentCountDisplay.textContent = comments.length;

    // Load comments
    comments.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      commentsList.appendChild(p);
    });

    // =========================
    // LIKE BUTTON
    // =========================
    likeBtn.addEventListener('click', () => {
      likeCount++;
      likeDisplay.textContent = likeCount;
      localStorage.setItem(`likes-${postId}`, likeCount);
    });

    // =========================
    // SHARE BUTTON (WHATSAPP + FACEBOOK)
    // =========================
    shareBtn.addEventListener('click', () => {

      shareCount++;
      shareDisplay.textContent = shareCount;
      localStorage.setItem(`shares-${postId}`, shareCount);

      const url = window.location.href;

      // Ask user where to share
      const choice = prompt("Type: 1 for WhatsApp, 2 for Facebook");

      if (choice === "1") {
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
      } else if (choice === "2") {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
      }
    });

    // =========================
    // TOGGLE COMMENT
    // =========================
    commentBtn.addEventListener('click', () => {
      commentSection.style.display =
        commentSection.style.display === 'none' ? 'block' : 'none';
    });

    // =========================
    // ADD COMMENT
    // =========================
    submitBtn.addEventListener('click', () => {

      const text = input.value.trim();

      if (text !== '') {

        // Add to UI
        const p = document.createElement('p');
        p.textContent = text;
        commentsList.appendChild(p);

        // Save
        comments.push(text);
        localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));

        // Update count
        commentCountDisplay.textContent = comments.length;

        input.value = '';
      }

    });

  });

});
