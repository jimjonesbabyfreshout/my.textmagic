var Invoice = function() {
    var $this = this;
    $this.init();
    
    $this.modalSendInvoice.on('hide.bs.modal', function() {
        $(this).find(':input[type=text]').val(null);
        $this.modalSendInvoice
            .find('.form-group')
            .removeClass('has-error')
            .find('.help-block')
            .remove();
    });

    $this.accountingEmailInp.on('input change click keyup blur focus', function () {
        var email = $(this).val();
        if ($.simpleEmailValidate(email)) {
            $this.accountingEmailBtn.btn('enable');
        } else {
            $this.accountingEmailBtn.btn('disable');
        }
    });
};

Invoice.prototype.init = function() {
    this.accountingEmailAlert = $('#accounting-email-alert');
    this.invoicesAlert = $('#invoices-alert');
    this.crudApi = $.prepareCrudPage({
        containerSelector: '#invoices-content',
        itemSelector:      'tr[data-widget=invoice]',
        commandUrl:        '/online/account/ajax',
        paginationCommand:  'invoicesTable',
        searchFormSelector: '#invoices-search'
    });
    this.accountingEmailForm = $('#accountingEmailForm');
    this.accountingEmailInp = $('#accountingEmailForm').find('input[data-field="accountingEmail"]');
    this.accountingEmailBtn = $('#accountingEmailForm').find('button[type="submit"]');
    this.sendInvoicesForm = $('#sendInvoicesForm');
    this.modalSendInvoice = $('#send-invoice-modal');
    this.sendInvoicesBtn = $('button[data-widget="send-invoices"]');
    this.exportSelectedBtn = $('a[data-widget="export-selected"]');
    this.commandUrl = '/online/account/ajax';
};

Invoice.prototype.renderListErrors = function(errors) {
    $.each(errors, function(key, value) {
        if (key == 'alert') {
            return true;
        }    
        $('[data-field=' + key + ']')
            .after('<span class="help-block filled">' + value + '</span>')
            .closest('.form-group')
            .removeClass('has-success')
            .addClass('has-error');
    });
};

Invoice.prototype.showAjaxAlert = function(element, cls, message) {
    if (cls == 'alert alert-success') {
        return element.successBlock(message);
    }

    element
        .removeClass()
        .addClass(cls)
        .show()
        .find('.message')
        .html(message);
};


Invoice.prototype.hideAjaxAlert = function(element) {
    element
        .hide()
        .removeClass()
        .find('.message')
        .html('');
};

Invoice.prototype.sendInvoices = function() {
    var $this = this;
    var $data = $this.sendInvoicesForm.serializeJSON();
    $data.cmd = 'invoicesSend';
    
    if (!$this.crudApi.getCheckedAllItems()) {
        $data.ids = $this.crudApi.getCheckedItems();
    }        

    $.ajax({
        url: $this.commandUrl,
        type: 'POST',
        dataType: 'JSON',
        data: $data,
        beforeSend: function() {
            $this.hideAjaxAlert($this.invoicesAlert);
            $this.modalSendInvoice.find(':input').attr('disabled', 'disabled');
            $this.modalSendInvoice
                .find('.btn-success')
                .spin('enable', 'Sending...');
            $this.modalSendInvoice
                .find('.btn-default')
                .hide();
            $this.modalSendInvoice
                .find('.form-group')
                .removeClass('has-error')
                .find('.help-block')
                .remove();
        },
        complete: function (xhr) {
            $this.modalSendInvoice.find(':input').removeAttr('disabled');
            $this.modalSendInvoice
                .find('.btn-success')
                .spin('disable');
            $this.modalSendInvoice
                .find('.btn-default')
                .show();
        },
        success: function(xhr) {
            if (xhr.success) {
                $this.modalSendInvoice.modal('hide');
                $this.showAjaxAlert($this.invoicesAlert, 'alert alert-success', xhr.message['alert']);
            } else {
                $this.renderListErrors(xhr.message);
            }
        },
        error: function(xhr) {
            $this.showAjaxAlert($this.invoicesAlert, 'alert alert-warning', 'Sorry, but it looks like something has gone wrong. Please try again or contact us at support@textmagic.com.');
        }
    });
}

Invoice.prototype.updateDetails = function() {
    var $this = this;
    var $data = $this.accountingEmailForm.serializeJSON();
    $data.cmd = 'updateDetails';
    $data.type = 'invoices';
    $.ajax({
        url: $this.commandUrl,
        type: 'POST',
        dataType: 'JSON',
        data: $data,
        beforeSend: function() {
            $this.accountingEmailForm.find(':input').attr('disabled', 'disabled');
            $this.accountingEmailForm.find('.btn-success').spin('enable', 'Saving...');
            $this.accountingEmailForm
                .find('.form-group')
                .removeClass('has-error')
                .find('.help-block')
                .remove();
            $this.hideAjaxAlert($this.accountingEmailAlert);
        },
        complete: function(xhr) {
            $this.accountingEmailForm.find(':input').removeAttr('disabled');
            $this.accountingEmailForm.find('.btn-success').spin('disable');
        },
        success: function(xhr) {
            if (xhr.success) {
                $this.accountingEmailForm.remove();
                $this.showAjaxAlert($this.accountingEmailAlert, 'alert alert-success', xhr.message['alert']);
            } else {
                $this.renderListErrors(xhr.message);
                if (xhr.message['alert']) {
                    $this.showAjaxAlert($this.accountingEmailAlert, 'alert alert-warning', xhr.message['alert']);
                }
            }
        },
        error: function(xhr) {
            $this.showAjaxAlert($this.accountingEmailAlert, 'alert alert-warning', 'Sorry, but it looks like something has gone wrong. Please try again or contact us at support@textmagic.com.');
        }
    });
}

Invoice.prototype.getExportInvoicesLinkParam = function() {
    var $this = this;
    
    var last = $this.crudApi.getPaginationApi().getRequestParams();
    delete last.page;
    delete last.perPage;
            
    if (!$this.crudApi.getCheckedAllItems()) {
        last.ids = $this.crudApi.getCheckedItems();
    }
        
    return '?' + decodeURIComponent($.param(last));
}