async function redeemCode(code) {
  try {
    const res = await fetch("/api/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code })
    });

    const data = await res.json();

    if (!data.ok) {
      alert(data.message || "兑换失败");
      return;
    }

    localStorage.setItem("mprompt_vip", JSON.stringify({
      plan: data.plan,
      expiresAt: data.expiresAt,
      activatedAt: new Date().toISOString()
    }));

    alert("开通成功");
    location.reload();
  } catch (err) {
    alert("请求失败，请检查网络或稍后再试");
  }
}
