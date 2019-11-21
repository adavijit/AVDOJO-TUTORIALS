<?php
/*

- Use PAYTM_ENVIRONMENT as 'PROD' if you wanted to do transaction in production environment else 'TEST' for doing transaction in testing environment.
- Change the value of PAYTM_MERCHANT_KEY constant with details received from Paytm.
- Change the value of PAYTM_MERCHANT_MID constant with details received from Paytm.
- Change the value of PAYTM_MERCHANT_WEBSITE constant with details received from Paytm.
- Above details will be different for testing and production environment.

*/
define('PAYTM_ENVIRONMENT', 'TEST'); // PROD
define('PAYTM_MERCHANT_KEY', '1x%%sX_@Qyra1_c0'); //Change this constant's value with Merchant key downloaded from portal
define('PAYTM_MERCHANT_MID', 'pqQOvQ34532874943456'); //Change this constant's value with MID (Merchant ID) received from Paytm
define('PAYTM_MERCHANT_WEBSITE', 'WEBSTAGING'); //Change this constant's value with Website name received from Paytm

/*$PAYTM_DOMAIN = "pguat.paytm.com";
if (PAYTM_ENVIRONMENT == 'PROD') {
	$PAYTM_DOMAIN = 'secure.paytm.in';
}

define('PAYTM_REFUND_URL', 'https://'.$PAYTM_DOMAIN.'/oltp/HANDLER_INTERNAL/REFUND');
define('PAYTM_STATUS_QUERY_URL', 'https://'.$PAYTM_DOMAIN.'/oltp/HANDLER_INTERNAL/TXNSTATUS');
define('PAYTM_STATUS_QUERY_NEW_URL', 'https://'.$PAYTM_DOMAIN.'/oltp/HANDLER_INTERNAL/getTxnStatus');
define('PAYTM_TXN_URL', 'https://'.$PAYTM_DOMAIN.'/oltp-web/processTransaction');*/

$PAYTM_STATUS_QUERY_NEW_URL='https://securegw-stage.paytm.in/order/status';
$PAYTM_TXN_URL='https://securegw-stage.paytm.in/order/process';

define('PAYTM_REFUND_URL', '');
define('PAYTM_STATUS_QUERY_URL', $PAYTM_STATUS_QUERY_NEW_URL);
define('PAYTM_STATUS_QUERY_NEW_URL', $PAYTM_STATUS_QUERY_NEW_URL);
define('PAYTM_TXN_URL', $PAYTM_TXN_URL);

?>
