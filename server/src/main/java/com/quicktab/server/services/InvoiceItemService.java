package com.quicktab.server.services;

import com.quicktab.server.models.InvoiceItem;
import com.quicktab.server.repositories.InvoiceItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class InvoiceItemService {

    private final InvoiceItemRepository invoiceItemRepository;

    public InvoiceItemService(InvoiceItemRepository invoiceItemRepository) {
        this.invoiceItemRepository = invoiceItemRepository;
    }

    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemRepository.findAll();
    }

    public List<InvoiceItem> getItemsByInvoiceId(Long invoiceId) {
        return invoiceItemRepository.findByInvoiceId(invoiceId);
    }

    public InvoiceItem createInvoiceItem(InvoiceItem item) {
        return invoiceItemRepository.save(item);
    }

    public void deleteInvoiceItem(Long id) {
        invoiceItemRepository.deleteById(id);
    }

}

