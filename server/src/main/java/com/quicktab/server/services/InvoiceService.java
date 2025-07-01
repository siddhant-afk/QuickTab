package com.quicktab.server.services;


import com.quicktab.server.models.Invoice;
import com.quicktab.server.models.InvoiceItem;
import com.quicktab.server.repositories.InvoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Optional<Invoice> getInvoiceById(Long id) {
        return invoiceRepository.findById(id);
    }

    public Invoice createInvoice(Invoice invoice) {
        for (InvoiceItem item : invoice.getItems()) {
            item.setInvoice(invoice);
        }

        return invoiceRepository.save(invoice);
    }

    public Invoice updateInvoice(Long id, Invoice updatedInvoice) {
        return invoiceRepository.findById(id)
                .map(invoice -> {
                    invoice.setCustomer(updatedInvoice.getCustomer());
                    invoice.setIssueDate(updatedInvoice.getIssueDate());
                    invoice.setDueDate(updatedInvoice.getDueDate());
                    invoice.setTotalAmount(updatedInvoice.getTotalAmount());
                    return invoiceRepository.save(invoice);
                })
                .orElseThrow(() -> new RuntimeException("Invoice not found"));
    }

    public void deleteInvoice(Long id) {
        invoiceRepository.deleteById(id);
    }
}


