package com.quicktab.server.controllers;

import com.quicktab.server.models.InvoiceItem;
import com.quicktab.server.services.InvoiceItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoice-items")
public class InvoiceItemController {


    private final InvoiceItemService invoiceItemService;

    public InvoiceItemController(InvoiceItemService invoiceItemService) {
        this.invoiceItemService = invoiceItemService;
    }

    @GetMapping
    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemService.getAllInvoiceItems();
    }

    @GetMapping("/invoice/{invoiceId}")
    public List<InvoiceItem> getItemsByInvoice(@PathVariable Long invoiceId) {
        return invoiceItemService.getItemsByInvoiceId(invoiceId);
    }

    @PostMapping
    public InvoiceItem createItem(@RequestBody InvoiceItem item) {
        return invoiceItemService.createInvoiceItem(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        invoiceItemService.deleteInvoiceItem(id);
    }
}
