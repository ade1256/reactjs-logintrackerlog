import React from "react";

export default (status) => {
  let color;

  if (status === 'Completed') {
    color = '#4caf50';
  }

  if (status === 'Waiting') {
    color = '#039be5';
  }

  if (status === 'Canceled') {
    color = '#ef4d5e';
  }

  if (status === 'On Hold') {
    color = '#a2a4a5';
  }

  if (['Processing', 'Shipped'].includes(status)) {
    color = '#055469';
  }

  return <p style={{
    color
  }}>{status}</p>
}
