// To integrate with your main GrantApp, add these calls:

// Check if user has premium
const premiumStatus = GrantAppPayments.getPremiumStatus();
if (premiumStatus.active) {
    // Enable premium features
    enablePremiumFeatures(premiumStatus.plan);
}

// Initiate payment from your app
GrantAppPayments.initiatePayment('pro_monthly', 15);

// Check transaction history
const transactions = GrantAppPayments.getTransactionHistory();