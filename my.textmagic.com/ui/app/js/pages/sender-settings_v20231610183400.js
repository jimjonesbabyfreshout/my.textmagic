var dropdownsLoaded = false;$(document).ready(function () { var route = { 'command': '/online/reply-options/ajax', 'dedicated': '/online/reply-options/dedicated/ajax' }; var $topAlert = $('[data-widget="top-alert"]'); var countryData; var clickedId = false; var clickedCountry = false; function showSelect() { } ; function hideSelect() { $("select.sender-settings-select").parent().hide(); $("select.sender-settings-select").parent().prev().show(); $("select.sender-settings-select").parent().spin('disable'); } ; var beforeReload = function (api) { var requestParams = api.getOptions().requestParams; requestParams.params = $.extend({}, requestParams.params, { chatId: $('#sender-settings-content').data('chatId') }); api.setOptions({ requestParams: requestParams }); }; var afterReload = function () { $('.spinning-thing').unbind('click').click(function () { $('.spinning-thing').spin('disable'); $(this).spin('enable'); var $tr = $(this).closest('tr'); clickedId = $tr.data('id'); clickedCountry = $tr.data('country'); }); $('a.edit-settings').unbind('click').click(function (e) { e.preventDefault(); hideSelect(); $(this).next().show().find('.chosen-container').trigger('mousedown'); $(this).hide(); e.stopPropagation(); }); $('select.sender-settings-select').unbind('focusout').focusout(function () { $(this).parent().hide(); $(this).parent().prev().show(); $(this).parent().spin('disable'); }); $('select.sender-settings-select').unbind('change').change(function () { if ($(this).find(':selected').data('href')) {hideSelect();return false;} $(this).parent().spin('enable'); var $row = $(this).closest('tr'); var $option = $(this).find('option:selected'); if (typeof ($option.data('widget')) === 'undefined' || $option.data('widget') != 'default-caller') {var addOptions = { cmd: 'upsertSettings', id: $row.data('id'), country_id: $row.data('country'), value: $(this).val(), user_id: $('#subaccountsList').val(), text: $(this).find(':selected').text(), chatId: $('#sender-settings-content').data('chatId') };$.post(route.command, addOptions, null, 'html').done(function (r) { $(r).insertAfter($row); $row.remove(); setTimeout(function () { $('.new').removeClass('new'); }, 2000); var typeFormats = { 'rp': 'shared', 'up': 'own-mobile', 'ui': 'dedicated', 'si': 'sender-id' }; app.track('Edited Sender Settings', 'Settings', { country: addOptions.country_id, fieldValue: addOptions.text, type: typeFormats[addOptions.value.substr(0, 2).toLowerCase()] }); afterReload(); }).fail(function () { if ('console' in window) {console.log('oops');} return false; });}else {var id = parseInt($(this).val());var newPhone = $option.data('phone');$('#messagesInboxTable').spin('enable');$.post('/online/reply-options/default-caller', { inboundid: id }, function (response) { if (response.success) {app.track('Set as default caller', 'Numbers', { phone: newPhone }); $('[data-widget="top-alert"]').successBlock('The number has been successfully set as default.');}else {console.error(response.message);} callsSettingsCrudApi.getPaginationApi().reload(); afterReload(); }, 'json');} }); if (!dropdownsLoaded) {dropdownsLoaded = true;crudApi.getPaginationApi().setOptions({ refresh: false });crudApi.getPaginationApi().setRequestParams({ renderDropdowns: true });crudApi.disableSpin();crudApi.getPaginationApi().reload();crudApi.getPaginationApi().setOptions({ refresh: true, callbackNavigationClick: function () { dropdownsLoaded = false; } });crudApi.getPaginationApi().setRequestParams({ renderDropdowns: false });crudApi.enableSpin();} if (dropdownsLoaded) {if (clickedId) {$('tr[data-id=' + clickedId + ']').find('a.edit-settings').click();}if (clickedCountry) {$('tr[data-country=' + clickedCountry + ']').find('a.edit-settings').click();}clickedId = false;clickedCountry = false;} }; var crudApi = $.prepareCrudPage({ containerSelector: '#sender-settings-content', itemSelector: 'tr[data-widget=countries]', commandUrl: route.command, searchFormSelector: '#sender-settings-search', afterReloadFunction: afterReload, beforeReloadFunction: beforeReload, perPage: 50, preSearchCallback: function () { dropdownsLoaded = false; } }); var callsSettingsCrudApi = $.prepareCrudPage({ containerSelector: '#calls-settings-content', itemSelector: 'tr[data-widget=call]', commandUrl: route.dedicated, paginationCommand: 'callsTable', searchFormSelector: '#calls-settings-search', afterReloadFunction: afterReload, beforeReloadFunction: beforeReload, perPage: 50, preSearchCallback: function () { dropdownsLoaded = false; } }); $(document).click(function (event) { if ($(event.target).closest('.chosen-container').length !== 0) {return;} if ($(event.target).hasClass('sender-settings-select')) {return;} hideSelect(); event.stopPropagation(); }); $('#sender-settings-search').on('sumbit', function () { dropdownsLoaded = false; }); $('#sender-settings-content').on('external-reload', function (){ crudApi.getPaginationApi().reload(); }); $('#subaccountsList').change(function () { dropdownsLoaded = false; crudApi.getPaginationApi().setRequestParams({ params: { user_id: $(this).val() } }).reload(); }); $('#acceptResetSettings').click(function (e) { var $this = $(this); $(this).spin('enable'); var addOptions = { cmd: 'upsertSettings', country_id: null, value: null, user_id: $('#subaccountsList').val() }; $.post(route.command, addOptions, null, 'html').done(function (r) { dropdownsLoaded = false;crudApi.getPaginationApi().reload(); $this.spin('disable'); $('#cancelResetSettings').click(); }).fail(function () { $this.spin('disable'); if ('console' in window) {console.log('oops');} $('#cancelResetSettings').click(); return false; }); }); });