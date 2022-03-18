function Hello(props) {
    // Melakukan destructing props (object)
    const { name } = props;
  
    return (
      <div>
        <h2>Hello React</h2>
        <p>Saya {name} - Digital Marketing</p>
      </div>
    );
}

export default Hello