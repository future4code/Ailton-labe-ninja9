import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.onChangeBusca} placeholder={"Buscar"} />
        <select onChange={this.props.onChangeOrdenacao}>
          <option></option>
          <option value={"crescente"}>Preço Crescente</option>
          <option value={"decrescente"}>Preço Decrescente</option>
          <option value={"titulo"}>Título</option>
          <option value={"prazo"}>Prazo</option>
        </select>
        <input
          type={"number"}
          onChange={this.props.onChangeMinimo}
          placeholder={"Preço Minimo"}
        />
        <input
          type={"number"}
          onChange={this.props.onChangeMaximo}
          placeholder={"Preço Máximo"}
        />
      </div>
    );
  }
}
