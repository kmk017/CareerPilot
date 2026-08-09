function PersonalInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
  github,
  setGithub,
  summary,
  setSummary,
}) {
  return (
    <div className="form-section">

      <h2>Personal Information</h2>

      <label>Full Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>LinkedIn</label>
      <input
        type="text"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />

      <label>GitHub</label>
      <input
        type="text"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <label>Professional Summary</label>

      <textarea
        rows="5"
        placeholder="Write your professional summary here"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>

    </div>
  );
}

export default PersonalInfo;