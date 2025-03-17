const InvoiceManagement = () => {
  const recentInvoices = [
    { id: 1, patientName: "Sajeeth", labName: "Blood lab", wardNumber: 1, doctorName: "Dr.Rajitha", treatment: "Dengue", totalAmount: "15000.00" },
    { id: 2, patientName: "Sajeeth", labName: "Blood lab", wardNumber: 1, doctorName: "Dr.Rajitha", treatment: "Dengue", totalAmount: "15000.00" },
    { id: 3, patientName: "Sajeeth", labName: "Blood lab", wardNumber: 1, doctorName: "Dr.Rajitha", treatment: "Dengue", totalAmount: "15000.00" },
    { id: 4, patientName: "Sajeeth", labName: "Blood lab", wardNumber: 1, doctorName: "Dr.Rajitha", treatment: "Dengue", totalAmount: "15000.00" },
  ];

  return (
    <div className="invoice-page">
      <h2>Invoice Management</h2>

      <div className="invoice-form">
        <div className="form-header">
          <button className="generate-report">Generate Report</button>
          <div className="search-box">
            <input type="text" placeholder="Invoice ID" />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="form-body">
          <div className="form-row">
            <select defaultValue="" className="dropdown">
              <option value="" disabled>Patient Name</option>
              <option>Sajeeth</option>
            </select>

            <select defaultValue="" className="dropdown">
              <option value="" disabled>Doctor Name</option>
              <option>Dr.Rajitha</option>
            </select>
          </div>

          <div className="form-row">
            <select defaultValue="" className="dropdown">
              <option value="" disabled>Lab Name</option>
              <option>Blood lab</option>
            </select>

            <select defaultValue="" className="dropdown">
              <option value="" disabled>Treatment</option>
              <option>Dengue</option>
            </select>
          </div>

          <div className="form-row">
            <input type="text" placeholder="Ward Number" />
            <div className="total-amount">
              <span>Total Amount : 15000</span>
            </div>
          </div>

          <button className="generate-bill">Generate Bill</button>
        </div>
      </div>

      <div className="recent-invoices">
        <h3>Recent Invoice</h3>
        {/* <p>No Recent Invoices</p> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Lab Name</th>
              <th>Ward Number</th>
              <th>Doctor name</th>
              <th>Treatment</th>
              <th>Total Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recentInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.patientName}</td>
                <td>{invoice.labName}</td>
                <td>{invoice.wardNumber}</td>
                <td>{invoice.doctorName}</td>
                <td>{invoice.treatment}</td>
                <td>{invoice.totalAmount}</td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn">✏️</button>
                    <button className="delete-btn">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceManagement; 