// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// LOAD SAVED THEME
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
<script>
document.querySelectorAll('.post').forEach(post => {
  const likeBtn = post.querySelector('.like-btn');
  const shareBtn = post.querySelector('.share-btn');
  const commentBtn = post.querySelector('.comment-btn');
  const commentSection = post.querySelector('.comment-section');
  const submitComment = post.querySelector('.submit-comment');
  const commentsList = post.querySelector('.comments-list');

  // Likes
  let likes = 0;
  likeBtn.addEventListener('click', () => {
    likes++;
    post.querySelector('.likes span').textContent = likes;
  });

  // Shares
  let shares = 0;
  shareBtn.addEventListener('click', () => {
    shares++;
    post.querySelector('.shares span').textContent = shares;
  });

  // Show comment input
  commentBtn.addEventListener('click', () => {
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
  });

  // Submit comment
  submitComment.addEventListener('click', () => {
    const commentText = post.querySelector('.comment-input').value.trim();
    if(commentText !== '') {
      const p = document.createElement('p');
      p.textContent = commentText;
      commentsList.appendChild(p);

      // Update comment count
      const commentCount = post.querySelector('.comments-count span');
      commentCount.textContent = commentsList.childElementCount;

      // Clear input
      post.querySelector('.comment-input').value = '';
    }
  });
});
</script>
