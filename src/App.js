import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="calculator">
      <div className="calculator-display">0</div>
      <div className="calculator-keypad">
        <div className="input-key">
          <div className="function-keys">
            <button className="calculator-key key-clear" />
            <button className="calculator-key key-sign" />
            <button className="calculator-key key-percent" />
          </div>
          <div className="digit-keys">
            <button className="calculator-key key-0" />
            <button className="calculator-key key-dot" />
            <button className="calculator-key key-1" />
            <button className="calculator-key key-2" />
            <button className="calculator-key key-3" />
            <button className="calculator-key key-4" />
            <button className="calculator-key key-5" />
            <button className="calculator-key key-6" />
            <button className="calculator-key key-7" />
            <button className="calculator-key key-8" />
            <button className="calculator-key key-9" />
          </div>
        </div>
        <div className="operator-keys">
          <button className="calculator-key key-divide" />
          <button className="calculator-key key-multiply" />
          <button className="calculator-key key-subtract" />
          <button className="calculator-key key-add" />
          <button className="calculator-key key-equals" />
        </div>
      </div>
    </div>
  );
}

export default App;
