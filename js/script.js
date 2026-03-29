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


  // =========================
  // TESTIMONIALS INTERACTION
  // =========================
  const posts = document.querySelectorAll('.post');

  if (posts.length > 0) {

    posts.forEach(post => {

      const likeBtn = post.querySelector('.like-btn');
      const shareBtn = post.querySelector('.share-btn');
      const commentBtn = post.querySelector('.comment-btn');
      const commentSection = post.querySelector('.comment-section');
      const submitBtn = post.querySelector('.submit-comment');
      const input = post.querySelector('.comment-input');
      const commentsList = post.querySelector('.comments-list');

      // Safety check
      if (!likeBtn || !shareBtn || !commentBtn) return;

      let likeCount = 0;
      let shareCount = 0;

      // 👍 LIKE
      likeBtn.addEventListener('click', () => {
        likeCount++;
        post.querySelector('.likes span').textContent = likeCount;
      });

      // 🔁 SHARE
      shareBtn.addEventListener('click', () => {
        shareCount++;
        post.querySelector('.shares span').textContent = shareCount;
      });

      // 💬 TOGGLE COMMENT BOX
      commentBtn.addEventListener('click', () => {
        commentSection.style.display =
          commentSection.style.display === 'none' ? 'block' : 'none';
      });

      // 📝 ADD COMMENT
      submitBtn.addEventListener('click', () => {
        const text = input.value.trim();

        if (text !== '') {
          const p = document.createElement('p');
          p.textContent = text;
          commentsList.appendChild(p);

          // Update count
          post.querySelector('.comments-count span').textContent =
            commentsList.children.length;

          input.value = '';
        }
      });

    });

  }

});
