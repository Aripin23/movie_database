import Hello from "./Hello";

function Main() {
    return (
      <main>
        {/**
         * Mengirim props ke component Hello.
         * nama props: name
         */}
        <Hello name="Aripin" />
        <Hello name="Abdul" />
        <Hello name="Aris Kurnia" />
        <Hello name="Muhammad" />
        <Hello name="Ali" />
      </main>
    );
}

export default Main
  