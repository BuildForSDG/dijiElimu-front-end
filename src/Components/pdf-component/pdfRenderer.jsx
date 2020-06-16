import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
class PdfRenderer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
    const {pdf} = this.props
 
    return (
      <div>
        <Document
          file={pdf.url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default PdfRenderer