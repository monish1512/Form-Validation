let ir = document.querySelectorAll("i");
let pr = document.querySelectorAll("p");

function valuid(e) {
  if (/^[a-z][a-z0-9]{4,}$/i.test(e.value)) {
    ir[0].style.display = "inline-block";
    ir[1].style.display = "none";
  } else {
    ir[1].style.display = "inline-block";
    ir[0].style.display = "none";
  }
}

function valname(e) {
  if (/^[a-z ]{3,}$/i.test(e.value)) {
    ir[2].style.display = "inline-block";
    ir[3].style.display = "none";
  } else {
    ir[3].style.display = "inline-block";
    ir[2].style.display = "none";
  }
}

function valphno(e) {
  if (/^[6-9][0-9]{9}$/.test(e.value)) {
    ir[4].style.display = "inline-block";
    ir[5].style.display = "none";
  } else {
    ir[5].style.display = "inline-block";
    ir[4].style.display = "none";
  }
}

function valemail(e) {
  if (
    /^[a-z]+[.]?[a-z0-9]+[@][a-z]{3,}[.](in|com|edu|org|asia|co.in)$/i.test(
      e.value
    )
  ) {
    ir[6].style.display = "inline-block";
    ir[7].style.display = "none";
  } else {
    ir[7].style.display = "inline-block";
    ir[6].style.display = "none";
  }
}

function valpwd(e) {
  let s = e.value;
  let f = true;

  if (/^[A-Z]/.test(s)) {
    pr[0].style.color = "green";
  } else {
    pr[0].style.color = "red";
    f = false;
  }

  if (/[a-z]+/.test(s)) {
    pr[1].style.color = "green";
  } else {
    pr[1].style.color = "red";
    f = false;
  }

  if (/[0-9]+/.test(s)) {
    pr[2].style.color = "green";
  } else {
    pr[2].style.color = "red";
    f = false;
  }

  if (/[#$^!%&*]/.test(s)) {
    pr[3].style.color = "green";
  } else {
    pr[3].style.color = "red";
    f = false;
  }

  if (s.length >= 6) {
    pr[4].style.color = "green";
  } else {
    pr[4].style.color = "red";
    f = false;
  }

  if (/^\S+$/.test(s)) {
    pr[5].style.color = "green";
  } else {
    pr[5].style.color = "red";
    f = false;
  }

  if (f) {
    ir[8].style.display = "inline-block";
    ir[9].style.display = "none";
  } else {
    ir[9].style.display = "inline-block";
    ir[9].style.display = "none";
  }
}
