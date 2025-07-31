async function fetchGitHub() {
  const user = document.getElementById("githubUser").value;
  const resultDiv = document.getElementById("githubResult");
  resultDiv.textContent = "Loading...";
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    resultDiv.textContent = `Error: ${e.message}`;
  }
}

// Instead of using broken WHOIS API, open who.is directly
function fetchWHOIS() {
  const domain = document.getElementById("domainInput").value;
  if (domain) {
    window.open(`https://who.is/whois/${domain}`, "_blank");
  }
}

// LinkedIn search via Google
function searchLinkedInProfile() {
  const input = document.getElementById("linkedinInput").value.trim();
  if (!input) {
    alert("Please enter a name.");
    return;
  }

  const query = encodeURIComponent(`${input} site:linkedin.com/in`);
  const url = `https://duckduckgo.com/?q=${query}`;


  // Trick: Create a real <a> link and simulate a click (avoids popup blockers)
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
}
