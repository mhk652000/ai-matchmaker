
import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    description: ""
  });

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:4000/rsvp", form);
    setMatches(res.data);
    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>AI Networking Matchmaker</h1>

        {/* FORM CARD */}
        <div style={styles.card}>
          <h2>RSVP</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="role"
            placeholder="Role / Position"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="company"
            placeholder="Company"
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="description"
            placeholder="What are you looking for at this event?"
            onChange={handleChange}
            style={{ ...styles.input, height: 100 }}
          />

          <button style={styles.button} onClick={submit}>
            {loading ? "Matching..." : "Find My Matches"}
          </button>
        </div>

        {/* MATCHES */}
        {matches.length > 0 && (
          <div style={styles.card}>
            <h2 style={{ color: "green" }}>
  RSVPed Successfully!
</h2>
            <h2>Your Matches</h2>

            {matches.map(m => (
              <div key={m.name} style={styles.match}>
                <div style={styles.matchTop}>
                  <div>
                    <strong>{m.name}</strong>
                    <div style={{ opacity: 0.7 }}>{m.company}</div>
                  </div>
                </div>

                <p style={styles.reason}>{m.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #020617)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    fontFamily: "Inter, sans-serif",
    color: "white"
  },

  wrapper: {
    width: "90%",
  },

  title: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 32
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    padding: 30,
    borderRadius: 16,
    marginBottom: 20,
    border: "1px solid rgba(255,255,255,0.15)"
  },

  input: {
    width: "100%",
    padding: 14,
    marginTop: 12,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    fontSize: 14,
    outline: "none"
  },

  button: {
    width: "100%",
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg,#2563eb,#7c3aed)",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer"
  },

  match: {
    marginTop: 15,
    padding: 18,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  matchTop: {
    display: "flex",
    justifyContent: "space-between"
  },

  reason: {
    marginTop: 10,
    opacity: 0.85,
    lineHeight: 1.4
  }
};

export default App;