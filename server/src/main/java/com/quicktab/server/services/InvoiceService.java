package com.quicktab.server.services;


import com.quicktab.server.models.Invoice;
import com.quicktab.server.models.InvoiceItem;
import com.quicktab.server.models.User;
import com.quicktab.server.repositories.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;
    private final QuicktabUserDetailsService userDetailsService;

    @Autowired
    public InvoiceService(InvoiceRepository invoiceRepository, QuicktabUserDetailsService userDetailsService) {
        this.invoiceRepository = invoiceRepository;
        this.userDetailsService = userDetailsService;
    }

    public List<Invoice> getAllInvoicesByUser()
    {
        User user = userDetailsService.getCurrentUser();

         return invoiceRepository.findByUser(user);
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


